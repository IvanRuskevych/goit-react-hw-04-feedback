import css from './Section.module.css';

function Section({ titleText = '', children }) {
  return (
    <section className={css.section}>
      <h2 className={css.sectionTitle}>{titleText}</h2>
      {children}
    </section>
  );
}

export default Section;
