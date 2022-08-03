import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
function Image(
    { src, alt, className, fallback = images.noImage, ...props },
    ref,
) {
    const [_fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(fallback);
    };
    return (
        <img
            fallback={fallback}
            className={classNames(styles.wrapper, classNames)}
            ref={ref}
            src={_fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);
