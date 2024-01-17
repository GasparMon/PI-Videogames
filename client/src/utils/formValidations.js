export default function formValidation(input) {
  const errors = {};

  if (input.name.length < 8 || input.name.length > 25) {
    if (input.name.length < 8) {
      errors.name = "You must enter a Name between 8 and 25 characters.";
    } else {
      errors.name = "Your Name must be less than 25 characters.";
    }
    errors.nameValidation = false;
  } else {
    errors.name = "Your Name is valid";
    errors.nameValidation = true;
  }

  if (input.description.length < 15) {
    errors.description =
      "You must enter a Description between 15 and 250 characters.";
    errors.descriptionValidation = false;
  } else if (input.description.length > 14 && input.description.length < 250) {
    errors.description = "Your Description is valid";
    errors.descriptionValidation = true;
  } else if (input.description.length > 250) {
    errors.description = "Your Description must be less than 250 characters.";
    errors.descriptionValidation = false;
  }

  if (input.platforms.length < 1) {
    errors.platformsValidation = false;
  } else {
    errors.platformsValidation = true;
  }

  if (input.genres.length < 1) {
    errors.genresValidation = false;
  } else {
    errors.genresValidation = true;
  }

  if (!input.rating || input.rating < 0) {
    errors.ratingValidation = false;
  } else {
    errors.ratingValidation = true;
  }

  return errors;
}
