import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://avatars.githubusercontent.com/u/95758970?v=4"
                alt="cc"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Thuan Phat</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </h4>
                <span className={cx('user-name')}>thuanphat</span>
            </div>
        </div>
    );
}

export default AccountItem;
