import React, { ReactNode, SVGProps } from "react";

export type IStepsProps = {
  steps: {
    id: string;
    name: string;
    href: string;
    status: string;
    // icon: SVGProps<SVGSVGElement>;
  }[];
};

const Stepper: React.FC<IStepsProps> = (steps) => {
  console.log(steps);
  return (
    <nav
      aria-label="Progress"
      className="bg-white rounded px-4 py-4 font-karla"
    >
      <ol role="list" className="space-y-4 md:flex md:space-y-0 md:space-x-8">
        {steps.steps.map((step) => (
          <li key={step.name} className="md:flex-1 ">
            {step.status === "COMPLETED" ? (
              <a
                href={step.href}
                className="group flex flex-col border-l-4 border-main-success py-2 pl-4  md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0"
              >
                <span className="text-main-success">{step.icon}</span>

                <span className="text-xs font-bold text-main-success ">
                  {step.id}
                </span>

                <span className="text-base text-main-success font-bold">
                  {step.name}
                </span>
              </a>
            ) : step.status === "CURRENT" ? (
              <a
                href={step.href}
                className="flex flex-col border-l-4 border-main-accent py-2 pl-4 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0"
                aria-current="step"
              >
                <span className="text-main-accent">{step.icon}</span>

                <span className="text-xs font-bold text-main-accent">
                  {step.id}
                </span>
                <span className="text-base text-gray-800 font-bold">
                  {step.name}
                </span>
              </a>
            ) : (
              <a
                href={step.href}
                className="group flex flex-col border-l-4 border-gray-200 py-2 pl-4  md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0"
              >
                <span className="text-gray-500">{step.icon}</span>
                <span className="text-xs font-bold text-gray-500 ">
                  {step.id}
                </span>
                <span className="text-base font-bold text-gray-500">
                  {step.name}
                </span>
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Stepper;
