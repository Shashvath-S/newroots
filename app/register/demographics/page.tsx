import DemographicsRegisterForm from "@/app/components/DemographicsRegisterForm";

export default function Register({
  searchParams,
}: {
  searchParams: { edit: string };
}) {
  const editMode = searchParams.edit === "1";
  console.log(editMode);

  return <DemographicsRegisterForm editMode={editMode} />;
}
