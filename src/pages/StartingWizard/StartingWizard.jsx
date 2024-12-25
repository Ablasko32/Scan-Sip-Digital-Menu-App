import WizardSecondPart from "../../features/startingWizard/WizardSecondPart/WizardSecondPart";
import WizardFirstPart from "../../features/startingWizard/WizardFirstPart/WizardFirstPart";
import WizardThirdPart from "../../features/startingWizard/WizardThirdPart/WizardThirdPart";
import useCreateNewLocation from "../../features/startingWizard/useCreateNewLocation";
import useGetUser from "../../features/auth/useGetUser";
import styles from "./StartingWizard.module.css";
import { useForm } from "react-hook-form";
import { useState } from "react";

function StartingWizard() {
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function handleStepUp(e) {
    e.preventDefault();
    setStep((prev) => {
      if (prev < 3) {
        return prev + 1;
      }
    });
  }

  function handleStepDown(e) {
    e.preventDefault();
    setStep((prev) => {
      if (prev > 1) {
        return prev - 1;
      }
    });
  }

  const { isCreatingLocation, createLocation } = useCreateNewLocation();

  // getting user id for location saving
  const { userID } = useGetUser();

  function handleSave(data) {
    if (!data) return;
    createLocation({ ...data, userId: userID });
  }

  return (
    <div className={styles.wizardContainer}>
      <h3 className={styles.header}>Welcome to Scan&Sip</h3>
      {/* numbers */}
      <div className={styles.stepNumbers}>
        <div className={step == 1 ? styles.active : ""}>1</div>
        <div className={step == 2 ? styles.active : ""}>2</div>
        <div className={step == 3 ? styles.active : ""}>3</div>
      </div>

      {/* form part */}
      <form onSubmit={handleSubmit(handleSave)}>
        {step === 1 && <WizardFirstPart register={register} />}
        {step === 2 && <WizardSecondPart register={register} />}
        {step === 3 && <WizardThirdPart register={register} />}
        <div className={styles.btnContainer}>
          {step > 1 && (
            <button onClick={(e) => handleStepDown(e)} className={styles.next}>
              Back
            </button>
          )}
          {step < 3 && (
            <button onClick={(e) => handleStepUp(e)} className={styles.next}>
              Next
            </button>
          )}
          {step === 3 && (
            <button
              disabled={isCreatingLocation}
              type="submit"
              className={styles.next}
            >
              Save
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default StartingWizard;
