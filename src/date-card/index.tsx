import React, { FC } from "react";
import './style.css';
export interface DateCardProps {
    day: number;
    month: string;
    isPassed: boolean;
}

export const DateCard: FC<DateCardProps> = ({ day, month, isPassed }) => {
    return (
        <div className={`card ${isPassed ? 'passed':''}`}>
            <strong>
                {month} {day}
            </strong>
        </div>
    )
};