import { useDispatch, useSelector } from 'react-redux';
import { getCurrentNorm } from '../../store/water/waterSelectors';
import { editDailyNorm } from '../../store/water/waterOperations';

export const DailyNormaInputForm = () => {
  const dailyNorm = useSelector(getCurrentNorm);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editDailyNorm(e.target.value));
  };

  return (
    <form>
      <label>
        Write down how much water you will drink:
        <input type="number" name="dailyNorma" defaultValue={dailyNorm} />
      </label>

      <button className="confirm" onClick={handleSubmit}>
        Save
      </button>
    </form>
  );
};
