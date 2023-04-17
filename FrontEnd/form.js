const getFormData = () => {
  const submitForm = document.querySelector("#submit-form");
  const imageFile = document.querySelector("#file-input").files[0];
  const titreFile = document.querySelector("#titre").value;
  const categorieFile = document.querySelector("#categorie").value;

  let formData = new FormData(submitForm);

  formData.append("image", imageFile);
  formData.append("title", titreFile);
  formData.append("category", categorieFile);

  return formData;
};

export { getFormData };
