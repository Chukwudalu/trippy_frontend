.card-container {
  max-width: 120rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 7rem;
}

.card {
  border-radius: 3px;
  overflow: hidden;
  -webkit-box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.1);
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.1);
  background-color: #fff;
  -webkit-transition: 0.3s all;
  transition: 0.3s all;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}
.card__header {
  position: relative;
}
.card__picture {
  position: relative;
  -webkit-clip-path: polygon(0 0, 100% 0%, 100% 83%, 0% 98%);
  clip-path: polygon(0 0, 100% 0%, 100% 83%, 0% 98%);
  height: 22rem;
}
.card__picture-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: -webkit-gradient(
    linear,
    left top,
    right bottom,
    from(#7dd56f),
    to(#28b487)
  );
  background-image: linear-gradient(to right bottom, #7dd56f, #28b487);
  opacity: 0.7;
}
.card__picture-img {
  -o-object-fit: cover;
  object-fit: cover;
  height: 100%;
  width: 100%;
}
.card__details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.75rem;
  grid-column-gap: 2rem;
  padding: 2.5rem 3rem;
}
.card__sub-heading {
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 700;
  grid-column: 1 / -1;
}
.card__text {
  grid-column: 1 / -1;
  font-size: 1.5rem;
  font-style: italic;
  margin-top: -1rem;
  margin-bottom: 0.75rem;
}
.card__data {
  font-size: 1.3rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.card__data svg {
  margin-right: 0.7rem;
}
.card__icon {
  height: 2rem;
  width: 2rem;
  fill: #55c57a;
}
.card__footer {
  background-color: #f7f7f7;
  padding: 2.5rem 3rem;
  border-top: 1px solid #f1f1f1;
  font-size: 1.4rem;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  margin-top: auto;
}
.card__footer-value {
  font-weight: 700;
}
.card__footer-text {
  color: #999;
}
.card__ratings {
  grid-row: 2 / 3;
}
.card .btn-small,
.card .btn {
  grid-row: 1 / 3;
  justify-self: end;
  -ms-flex-item-align: center;
  align-self: center;
}

.section-description {
  background-color: #fcfcfc;
  margin-top: calc(0px - var(--section-rotate));
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.section-description > * {
  padding: 0 8vw;
  padding-top: 14vw;
  padding-bottom: calc(1vw + var(--section-rotate));
  -webkit-box-flex: 0;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
}

.description-box .description {
  margin-right: 5rem;
}
.description-box .description__text {
  font-size: 1.7rem;
}
.description-box .description__text:not(:last-child) {
  margin-bottom: 2rem;
}

.overview-box {
  background-color: #f7f7f7;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.overview-box__group:not(:last-child) {
  margin-bottom: 7rem;
}
.overview-box__detail {
  font-size: 1.5rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-weight: 400;
}
.overview-box__detail svg {
  margin-right: 1.25rem;
}
.overview-box__detail:not(:last-child) {
  margin-bottom: 2.25rem;
}
.overview-box__icon {
  height: 2.25rem;
  width: 2.25rem;
  fill: #55c57a;
}
.overview-box__label {
  font-weight: 700;
  margin-right: 2.25rem;
  text-transform: uppercase;
  font-size: 1.4rem;
}
.overview-box__text {
  text-transform: capitalize;
}
.overview-box__img {
  border-radius: 50%;
  height: 3.5rem;
  margin-right: 1.25rem;
}


.login-form {
  margin: 0 auto;
  max-width: 55rem;
  background-color: #fff;
  -webkit-box-shadow: 0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.06);
  box-shadow: 0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.06);
  padding: 5rem 7rem;
  border-radius: 5px;
}

.form__input {
  display: block;
  font-family: inherit;
  font-size: 1.5rem;
  color: inherit;
  padding: 1.25rem 1.75rem;
  border: none;
  width: 100%;
  background-color: #fff;
  background-color: #f2f2f2;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  border-radius: 4px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  /* Pseudo element (a visible thing that isn't really in the DOM).
      Also needs -ms- */
}

.form__input:focus {
  outline: none;
  border-bottom: 3px solid #55c57a;
}
.form__input:focus:invalid {
  border-bottom: 3px solid #ff7730;
}
.form__input::-webkit-input-placeholder {
  color: #bbb;
}

.form__group:not(:last-child) {
  margin-bottom: 2.5rem;
}

.form__label {
  display: block;
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.form__photo-upload {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 1.6rem;
}

.form__user-photo {
  height: 7.5rem;
  width: 7.5rem;
  border-radius: 50%;
  margin-right: 2rem;
}

.form__upload {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}

.form__upload:focus + label {
  outline: 3px solid #55c57a;
  outline-offset: 3px;
}

.form__upload + label {
  color: #55c57a;
  display: inline-block;
  text-decoration: none;
  border-bottom: 1px solid #55c57a;
  padding: 3px;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  cursor: pointer;
}
.form__upload + label:hover {
  background-color: #55c57a;
  color: #fff;
  -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
  -webkit-transform: translateY(-2px);
  transform: translateY(-2px);
}