/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import { faker } from '@faker-js/faker';

import { HttpResponse, delay, http } from 'msw';

import type { Pet, Pets } from '.././models';

export const getListPetsResponseMock = (): Pets =>
  Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => ({
    id: faker.number.int({ min: undefined, max: undefined }),
    name: faker.string.alpha(20),
    tag: faker.string.alpha(20),
  }));

export const getCreatePetsResponseMock = (
  overrideResponse: Partial<Pet> = {},
): Pet => ({
  id: faker.number.int({ min: undefined, max: undefined }),
  name: faker.string.alpha(20),
  tag: faker.string.alpha(20),
  ...overrideResponse,
});

export const getUpdatePetsResponseMock = (
  overrideResponse: Partial<Pet> = {},
): Pet => ({
  id: faker.number.int({ min: undefined, max: undefined }),
  name: faker.string.alpha(20),
  tag: faker.string.alpha(20),
  ...overrideResponse,
});

export const getShowPetByIdResponseMock = (
  overrideResponse: Partial<Pet> = {},
): Pet => ({
  id: faker.number.int({ min: undefined, max: undefined }),
  name: faker.string.alpha(20),
  tag: faker.string.alpha(20),
  ...overrideResponse,
});

export const getListPetsMockHandler = (
  overrideResponse?:
    | Pets
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<Pets> | Pets),
) => {
  return http.get('*/pets', async (info) => {
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
    | Pet
    | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0],
      ) => Promise<Pet> | Pet),
) => {
  return http.post('*/pets', async (info) => {
    await delay(1000);

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === 'function'
            ? await overrideResponse(info)
            : overrideResponse
          : getCreatePetsResponseMock(),
      ),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    );
  });
};

export const getUpdatePetsMockHandler = (
  overrideResponse?:
    | Pet
    | ((
        info: Parameters<Parameters<typeof http.put>[1]>[0],
      ) => Promise<Pet> | Pet),
) => {
  return http.put('*/pets', async (info) => {
    await delay(1000);

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === 'function'
            ? await overrideResponse(info)
            : overrideResponse
          : getUpdatePetsResponseMock(),
      ),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    );
  });
};

export const getShowPetByIdMockHandler = (
  overrideResponse?:
    | Pet
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<Pet> | Pet),
) => {
  return http.get('*/pets/:petId', async (info) => {
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
  getUpdatePetsMockHandler(),
  getShowPetByIdMockHandler(),
];
