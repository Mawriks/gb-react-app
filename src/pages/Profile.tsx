import { FC } from 'react';
import { toggleProfileVisible } from 'src/store/profile/actions';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeName } from 'src/components/App/components/ChangeName';
import { selectName, selectVisible } from 'src/store/profile/selectors';

export const Profile: FC = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  const visible = useSelector(selectVisible);
  return (
    <>
      <h1>Profile page</h1>
      <p>Your name: {name}</p>
      <label>
        <input
          onChange={() => dispatch(toggleProfileVisible())}
          type="checkbox"
          defaultChecked={visible}
        />
        Profile visiability
      </label>
      <br />
      <ChangeName />
    </>
  );
};
