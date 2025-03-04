import { cn } from '@/lib/utils';
import React from 'react';

interface ContainerDashProps {
    children: React.ReactNode;
    className?: string;
}

const ContainerDash: React.FC<ContainerDashProps> = 
({ className , children } :
    { className?: string, children: React.ReactNode }
) => {
    return <div className={cn("mx-auto w-full max-w-screen-[1600px] px-4 md:px-16}",className)}>{children}</div>;
};

export default ContainerDash;