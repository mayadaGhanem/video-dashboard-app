import { GET_MOVIES_URL } from "../../src/constant/service";

export function mockGetData() {
    cy.intercept('GET', GET_MOVIES_URL, { fixture: 'mockData.json' }).as('getMoviesData');
  }
  