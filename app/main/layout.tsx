import Container from "@/components/layout/container";
import NavBar from "@/components/customUi/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Container>
        <NavBar />
        {children}
      </Container>
    </section>
  );
}
