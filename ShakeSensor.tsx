import React, { useEffect, useState, useRef, FC } from 'react';
import { Accelerometer } from 'expo-sensors';
import {Platform, View} from 'react-native';

interface ShakeSensorProps {
    onShake: () => void;
    /** Adjust threshold as needed. Higher means stronger shake required. */
    threshold?: number;
    /** Cooldown in ms between shakes. Default 1000ms (1 second). */
    cooldown?: number;
}

const ShakeSensor: FC<ShakeSensorProps> = ({
                                                      onShake,
                                                      threshold = 4,
                                                      cooldown = 1000,
                                                  }) => {
    const [accData, setAccData] = useState({ x: 0, y: 0, z: 0 });
    const lastShakeTime = useRef<number>(0);

    useEffect(() => {
        // Skip on web or if Accelerometer is not available
        if (Platform.OS === 'web' || !Accelerometer) {
            return;
        }

        // Subscribe to accelerometer updates
        let subscription: { remove: () => void } | null = null;
        subscription = Accelerometer.addListener((data) => {
            setAccData(data);
        });

        // Update interval in ms (Adjust to filter noise. 50–100ms is typical)
        Accelerometer.setUpdateInterval(50);

        // remove listener on unmount
        return () => {
            subscription?.remove();
        };
    }, []);

    useEffect(() => {
        // Skip on web or if Accelerometer is not available
        if (Platform.OS === 'web' || !Accelerometer) {
            return;
        }

        const { x, y, z } = accData;
        const magnitude = Math.sqrt(x * x + y * y + z * z);

        // If magnitude exceeds threshold, check if we're off cooldown
        if (magnitude > threshold) {
            const now = Date.now();
            if (now - lastShakeTime.current >= cooldown) {
                // Off cooldown: fire the shake event
                lastShakeTime.current = now;
                onShake();
            }
            // If it's still within cooldown, ignore
        }
    }, [accData, threshold, cooldown, onShake]);

    // Render nothing
    return null;
};

export default ShakeSensor;
