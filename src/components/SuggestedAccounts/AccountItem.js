import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/63d21df6e42d00321e0d33ca04d7c242~c5_100x100.jpeg?x-expires=1660744800&x-signature=SnTNdJ6Ooo3alZzonqujpyCb%2FnM%3D"
                alt=""
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>tienbip</strong>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </p>
                <p className={cx('name')}>Tiến Bịp</p>
            </div>
        </div>
    );
}
AccountItem.propTypes = {};
export default AccountItem;
