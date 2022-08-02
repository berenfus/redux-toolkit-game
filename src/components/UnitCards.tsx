import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPlayerUnit } from "../features/roundSlice";
import { RootState } from "../store";

const UnitCards = () => {
  const { unitsList } = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch();

  const handleClick = (event: any) => {
    dispatch(setPlayerUnit(unitsList[event.target.value]));
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Units</FormLabel>
      <RadioGroup row name="row-radio-buttons-group">
        {!!unitsList &&
          unitsList.map((item, index) => (
            <FormControlLabel
              key={index}
              value={index}
              control={<Radio />}
              label={item.unitName}
              onClick={handleClick}
            />
          ))}
      </RadioGroup>
    </FormControl>
  );
};

export default UnitCards;
