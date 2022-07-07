import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { MouseEventHandler } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPlayerUnit } from "../actions/gameActions";
import { IGameState } from "../redusers/gameReduser";

const UnitCards = () => {
  const unitsList = useSelector((state:IGameState) => state.unitList);
  const dispatch = useDispatch();

  const handleClick = (event: any) => {
    if(event.target.value !== undefined) {
      dispatch(setPlayerUnit(event.target.value));
    }
  }

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Units</FormLabel>
      <RadioGroup row name="row-radio-buttons-group">
        {unitsList.map((element) => 
        <FormControlLabel 
          value={unitsList.findIndex((e) => element.unitName === e.unitName)} 
          control={<Radio />}
          label={element.unitName}
          onClick={(event) => handleClick(event)}
        />)}
      </RadioGroup>
    </FormControl>
  );
}

export default UnitCards;