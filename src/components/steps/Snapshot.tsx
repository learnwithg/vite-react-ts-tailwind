import React, { useEffect, useState, useRef } from "react";
import Webcam from "react-webcam";
import { Button } from "kmc-design-system";

import { useDispatch } from "react-redux";
import { useAppSelector } from "../../app/store/store";
import { formActions } from "../../app/store/formSlice";
import { formValidateActions } from "../../app/store/formSlice";

const Snapshot = () => {
  const webcamRef = useRef(null);

  const [counter, setCounter] = useState(3);
  const [isClicked, setIsClicked] = useState(false);

  const formImg = useAppSelector((state) => state.formState.formImg);

  const dispatch = useDispatch();

  const capture = React.useCallback(() => {
    setIsClicked(true);
    setTimeout(() => {
      const imageSrc = webcamRef.current?.getScreenshot({
        width: 600,
        height: 800,
      });

      dispatch(formActions.pushScreenshot(imageSrc));
      dispatch(formValidateActions.validateSnapshotForm(true));
    }, 3000);
  }, [webcamRef]);

  useEffect(() => {
    if (isClicked === true) {
      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }
  }, [counter, isClicked]);

  return (
    <div className="font-Karla justify-center items-center">
      <p className="text-xl font-karla font-bold text-pumpkin mb-2 text-center">
        Tap to start capturing photo
      </p>
      {/* <p>{counter}</p> */}

      <div className="drop-shadow-md  ">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          onClick={capture}
          className="rounded shadow md:w-full hover:cursor-pointer"
        />
        {/* <button onClick={capture}>Capture photo</button> */}
        {/* {imgSrc && <img src={imgSrc} />} */}

        <div className="w-full flex gap-4 mt-2">
          <Button
            className="w-full"
            variant="secondary"
            onClick={() =>
              dispatch(formValidateActions.validateFillUpForm(false))
            }
          >
            Previous
          </Button>
          <Button className="w-full">Next</Button>
          {/* <SecondaryBtn labelName="Previous" />
          <Button labelName="Next" /> */}
        </div>
      </div>
    </div>
  );
};

export default Snapshot;
