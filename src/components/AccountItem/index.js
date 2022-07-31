import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/dbec84e3e72c09cece5a1453bcb1f026~c5_300x300.webp?x-expires=1659423600&x-signature=UAoOqJu8DJo5XcU7cqqegAYjA74%3D"
                alt="cc"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Thuan Phat</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('user-name')}>thuanphat</span>
            </div>
        </div>
    );
}

export default AccountItem;
