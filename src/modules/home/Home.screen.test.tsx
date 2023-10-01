import { render, screen } from "@testing-library/react-native";
import { Home } from "./Home.screen";

test("home screen with title is correctly rendered", async () => {
  // PARTIE 1 : On rend le composant avec les constantes qu'on veut
  const expectedHeaderTextForTest = "MyLEAGUE";

  render(<Home />);

  // PARTIE 2 : On cherche les données qu'on veut vérifier dans le composant rendu / On vérifie les comportements
  const HeaderOutput = screen.getByText(expectedHeaderTextForTest);

  // PARTIE 3 : On fait des vérifications
  expect(HeaderOutput).toBeTruthy();
  expect(screen.toJSON()).toMatchSnapshot();
});
