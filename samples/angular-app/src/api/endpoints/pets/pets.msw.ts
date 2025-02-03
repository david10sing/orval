/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import { faker } from '@faker-js/faker';
import { HttpResponse, delay, http } from 'msw';
import type { Pet, Pets } from '../../model';

export const getListPetsResponseMock = (): Pets =>
  Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => ({
    id: faker.number.int({ min: undefined, max: undefined }),
    name: (() => faker.person.lastName())(),
    tag: (() => faker.person.lastName())(),
  }));

export const getShowPetByIdResponseMock = () =>
  (() => ({
    id: faker.number.int({ min: 1, max: 99 }),
    name: faker.person.firstName(),
    tag: faker.helpers.arrayElement([faker.word.sample(), void 0]),
  }))();

export const getListPetsMockHandler = (
  overrideResponse?:
    | Pets
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<Pets> | Pets),
) => {
  return http.get('*/v:version/pets', async (info) => {
    await delay(1000);

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === 'function'
            ? await overrideResponse(info)
            : overrideResponse
          : getListPetsResponseMock(),
      ),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    );
  });
};

export const getCreatePetsMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.post('*/v:version/pets', async (info) => {
    await delay(1000);
    if (typeof overrideResponse === 'function') {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 201 });
  });
};

export const getShowPetByIdMockHandler = (
  overrideResponse?:
    | Pet
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<Pet> | Pet),
) => {
  return http.get('*/v:version/pets/:petId', async (info) => {
    await delay(1000);

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === 'function'
            ? await overrideResponse(info)
            : overrideResponse
          : getShowPetByIdResponseMock(),
      ),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    );
  });
};
export const getPetsMock = () => [
  getListPetsMockHandler(),
  getCreatePetsMockHandler(),
  getShowPetByIdMockHandler(),
];
