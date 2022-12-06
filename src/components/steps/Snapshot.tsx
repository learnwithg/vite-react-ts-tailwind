import React, { useEffect, useState, useRef } from "react";
import Webcam from "react-webcam";
import { Button } from "kmc-design-system";

import { useDispatch } from "react-redux";
import { formActions } from "../../app/store/formSlice";
import { formValidateActions } from "../../app/store/formSlice";
import { stepperAction } from "../../app/store/stepperSlice";

const Snapshot = () => {
  const webcamRef = useRef(null);

  const [counter, setCounter] = useState(3);
  const [isClicked, setIsClicked] = useState(false);

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
      dispatch(stepperAction.forwardStep("STEP 2"));
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

      <div className="drop-shadow-md relative  ">
        <p className="font-barlow font-bold text-4xl text-white z-999 absolute left-4 top-2  ">
          {counter}
        </p>
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
            className="w-1/"
            variant="secondary"
            onClick={() => {
              dispatch(formValidateActions.validateFillUpForm(false));
              dispatch(stepperAction.prevStep("STEP 2"));
            }}
          >
            Previous
          </Button>
          <Button className="w-full" onClick={capture}>
            Capture Photo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Snapshot;
