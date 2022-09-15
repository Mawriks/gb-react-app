import { FC } from 'react';
import { toggleProfileVisible } from 'src/store/profile/actions';
import { useDispatch, useSelector } from 'react-redux';
import { ProfileState } from 'src/store/profile/reducer';
import { ChangeName } from 'src/components/App/components/ChangeName';

export const Profile: FC = () => {
  const dispatch = useDispatch();
  const name = useSelector((state: ProfileState) => state.name);
  const visible = useSelector((state: ProfileState) => state.visible);
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
