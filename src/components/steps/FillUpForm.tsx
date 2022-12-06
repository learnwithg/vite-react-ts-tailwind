import { Input, Button } from "kmc-design-system";
import ComboBox from "../../ui/ComboBox";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../utils/resolvers/formSchema";

import { useGetReasonToVisitQuery } from "../../app/query/vmsApi";
import { formActions, formValidateActions } from "../../app/store/formSlice";
import { stepperAction } from "../../app/store/stepperSlice";
import { useDispatch } from "react-redux";

const FillUpForm: React.FC = () => {
  const dispatch = useDispatch();

  const { data: reason, isLoading } = useGetReasonToVisitQuery("");

  const people = [
    { id: 1, name: "Wade Cooper" },
    { id: 2, name: "Arlene Mccoy" },
    { id: 3, name: "Devon Webb" },
    { id: 4, name: "Tom Cook" },
    { id: 5, name: "Tanya Fox" },
    { id: 6, name: "Hellen Schmidt" },
    { id: 7, name: "Cannot Find Name?" },
  ];

  const company = [
    { id: 1, company: "KMC" },
    { id: 2, company: "CIMB" },
  ];
  const person = [
    { id: 1, person: "Eug Calapad" },
    { id: 2, person: "Otlum Multo" },
    { id: 3, person: "Cannot find name?" },
  ];

  const {
    formState: { errors },
    handleSubmit,
    control,
    watch,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const watchPersonToVisit = watch("personToVisit");

  const onSubmitHandler = (e) => {
    console.log(e);
    dispatch(formActions.fillUpForm(e));
    dispatch(formValidateActions.validateFillUpForm(true));
    dispatch(stepperAction.forwardStep("STEP 1"));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="font-karla text-gray-800 grid gap-2 md:grid-cols-2"
    >
      <Controller
        name="firstName"
        control={control}
        render={({ field: { onChange } }) => (
          <Input
            error={errors.firstName?.message}
            label="Firstname"
            onChange={onChange}
          />
        )}
      />

      <Controller
        name="lastName"
        control={control}
        render={({ field: { onChange } }) => (
          <Input
            error={errors.lastName?.message}
            label="Lastname"
            onChange={onChange}
          />
        )}
      />

      <Controller
        name="emailAddress"
        control={control}
        render={({ field: { onChange } }) => (
          <Input
            className="md:col-span-2"
            error={errors.emailAddress?.message}
            label="Email Address"
            onChange={onChange}
          />
        )}
      />

      <div className="md:col-span-2 ">
        <label className="text-xs text-gray-800 ">Company To Visit</label>
        <Controller
          name="companyToVisit"
          control={control}
          render={({ field: { onChange } }) => (
            <ComboBox
              data={company}
              selectedData={(arg) => onChange(arg.company)}
            />
          )}
        />
        <p className="text-xs text-main-danger mt-1">
          {errors.companyToVisit?.message}
        </p>
      </div>

      <div className="md:col-span-2 ">
        <label className="text-xs text-gray-800 ">Person To Visit</label>
        <Controller
          name="personToVisit"
          control={control}
          render={({ field: { onChange } }) => (
            <ComboBox
              data={person}
              selectedData={(arg) => onChange(arg.person)}
            />
          )}
        />
        <p className="text-xs text-main-danger mt-1">
          {errors.personToVisit?.message}
        </p>
      </div>

      {watchPersonToVisit === "Cannot find name?" && (
        <div className="md:col-span-2 ">
          <Controller
            name="personToVisitName"
            control={control}
            render={({ field: { onChange } }) => (
              <Input
                className="md:col-span-2"
                error={errors.personToVisitName?.message}
                label="Person To Visit Name"
                onChange={onChange}
              />
            )}
          />
        </div>
      )}

      <div className="md:col-span-2">
        <label className="text-xs text-gray-800 ">Reason To Visit</label>
        <Controller
          name="reasonToVisit"
          control={control}
          render={({ field: { onChange } }) => (
            <ComboBox
              data={reason?.data ?? people}
              selectedData={(arg) => onChange(arg.reason)}
            />
          )}
        />
        <p className="text-xs text-main-danger mt-1">
          {errors.reasonToVisit?.message}
        </p>
      </div>

      <Button type="submit" className="w-full mt-4 md:col-span-2">
        Next
      </Button>
    </form>
  );
};

export default FillUpForm;
