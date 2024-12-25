import WizardSecondPart from "../../features/startingWizard/WizardSecondPart/WizardSecondPart";
import WizardFirstPart from "../../features/startingWizard/WizardFirstPart/WizardFirstPart";
import WizardThirdPart from "../../features/startingWizard/WizardThirdPart/WizardThirdPart";
import useCreateNewLocation from "../../features/startingWizard/useCreateNewLocation";
import useGetUser from "../../features/auth/useGetUser";
import { useForm, FormProvider } from "react-hook-form";
import styles from "./StartingWizard.module.css";
import { useState } from "react";

function StartingWizard() {
  const [step, setStep] = useState(1);

  const { register, handleSubmit, formState, trigger } = useForm({
    mode: "all",
  });

  async function handleStepUp(e) {
    const isValid = await trigger();
    e.preventDefault();
    if (isValid) {
      setStep((prev) => {
        if (prev < 3) {
          return prev + 1;
        }
      });
    }
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
      <FormProvider {...{ register, handleSubmit, formState }}>
        <form onSubmit={handleSubmit(handleSave)}>
          {step === 1 && <WizardFirstPart />}
          {step === 2 && <WizardSecondPart />}
          {step === 3 && <WizardThirdPart />}
          <div className={styles.btnContainer}>
            {step > 1 && (
              <button
                onClick={(e) => handleStepDown(e)}
                className={styles.next}
              >
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
      </FormProvider>
    </div>
  );
}

export default StartingWizard;
