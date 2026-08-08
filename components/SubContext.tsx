import { Container } from "./Container";

export function SubContext() {
  return (
    <Container id="phy" borderBottom={true}>
      <div className="flex flex-col xl:flex-row justify-between items-start gap-8">
        <div><p className="text-sm text-teal-primary font-jakarta uppercase">01. PHILOSOPHY</p></div>
        <div>
          <p className="md:w-189.25 text-light-primary font-fraunces text-4xl md:text-[40px] font-medium leading-12 mb-6">"Great software feels inevitable."</p>
          <p className="md:w-174.75 text-light-primary font-jakarta text-[16px] mb-6 leading-6">Users shouldn't have to think about the interface, and developers shouldn't have to fight the codebase. I enjoy building products where performance, accessibility and maintainability are considered from the start rather than added later.</p>
        </div>
      </div>
    </Container>
  );
}