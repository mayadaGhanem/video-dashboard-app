import { mockGetData } from "../support/interceptors";

describe("API Interception Tests", () => {
  beforeEach(() => {
    // Call the custom interceptor functions
    mockGetData(); // This will mock the GET request for /api/data
    cy.visit("/"); // Visiting the page that triggers the API request
    cy.wait("@getMoviesData");
  });

  describe("Statistics Chart", () => {
    it("should render title of  chart", () => {
      cy.get("h1.statistics-title").should(
        "contain",
        "Oscar Statistics Overview"
      );
    });
    it("should render the chart", () => {
      cy.get(".apexcharts-canvas") // This is the container for the ApexChart
        .should("be.visible"); // Assert the chart is visible
    });
    it("should display x-axis and y-axis labels correctly", () => {
      cy.get(".nominations-chart .apexcharts-xaxis text").should("have.length", 5); // Adjust to match the number of labels
      cy.get(".wins-chart .apexcharts-xaxis text").should("have.length", 15); // Adjust to match the number of labels
    });
  });

  describe("Leaderboard", () => {
    it('should render the leaderboard container', () => {
      cy.get('.leaderboard-container')
        .should('be.visible')
        .and('have.class', 'bg-white');
    });
  
    it('should display exactly 5 movie items', () => {
      cy.get('.leaderboard-item')
        .should('have.length', 5); // Ensure exactly 5 movie items are displayed
    });
  
  });
});
