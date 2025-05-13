import DOMPurify from 'dompurify';

function SafeHTMLDemo() {
  const fakeUserInput = `<script>alert("XSS!");</script><b>Hej, världen!</b>`;

  const cleanHTML = DOMPurify.sanitize(fakeUserInput);

  return (
    <section className="safe-html-demo">
      <h2>Exempel på XSS-skydd</h2>
      <div dangerouslySetInnerHTML={{ __html: cleanHTML }} />
    </section>
  );
}

export default SafeHTMLDemo;
