import React from 'react';
import PreviewMinimal from '../components/PreviewMinimal';
import PreviewElegant from '../components/PreviewElegant';
import FutureStylePlaceholder from '../components/FuturestylePlaceholder';

export const immutableAdd = <T extends {}>(set: Set<T>, e: T) => {
    const copy = new Set(set);
    copy.add(e);
    return copy;
};

export const immutableDelete = <T extends {}>(set: Set<T>, e: T) => {
    const copy = new Set(set);
    copy.delete(e);
    return copy;
};

export const renderPreview = (style: string, name: string, size: 'large' | 'small') => {
    switch (style) {
        case 'minimal':
            return <PreviewMinimal name={name} size={size} />;
        case 'elegant':
            return <PreviewElegant name={name} size={size} />;
        default:
            return <FutureStylePlaceholder size={size} />;

    }
};
