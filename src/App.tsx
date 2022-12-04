import React from "react";

import Navbar from "./components/Navbar";
import Container from "./ui/Container";
import HeaderPage from "./components/HeaderPage";
// import StepsContainer from "./ui/StepsContainer";
import FormsContainer from "./components/FormsContainer";

import Stepper from "./ui/Stepper";

import { UserIcon } from "@heroicons/react/solid";
import { CameraIcon } from "@heroicons/react/solid";
import { CheckIcon } from "@heroicons/react/solid";

import { useAppSelector } from "#rtkhooks/index";

const App = () => {
  const stepsState = useAppSelector((state) => state.stepperState.stepState);
  console.log(stepsState);

  // const steps = [
  //   {
  //     id: "STEP 1",
  //     name: "Fill-up form",
  //     href: "#",
  //     status: stepsState.current,
  //     icon: <UserIcon width={24} />,
  //   },
  //   {
  //     id: "STEP 2",
  //     name: "Take a snapshot",
  //     href: "#",
  //     status: stepsState,
  //     icon: <CameraIcon width={24} />,
  //   },
  //   {
  //     id: "STEP 3",
  //     name: "Review Form",
  //     href: "#",
  //     status: stepsState,
  //     icon: <CheckIcon width={24} />,
  //   },
  // ];

  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <Container>
        <main>
          <HeaderPage />
          <div className="w-100 h-0.5 bg-orange-400 mb-8"></div>
          <Stepper steps={stepsState} />
          {/* <StepsContainer /> */}
          <FormsContainer />
        </main>
      </Container>
    </React.Fragment>
  );
};

export default App;
