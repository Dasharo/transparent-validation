import {
  FETCH_PLATFORMS_PENDING,
  FETCH_PLATFORMS_SUCCESS,
  FETCH_PLATFORMS_ERROR,
} from "data/constans";

export const fetchPlatformsPending = () => ({
  type: FETCH_PLATFORMS_PENDING,
});

export const fetchPlatformsSuccess = (platforms) => ({
  type: FETCH_PLATFORMS_SUCCESS,
  payload: platforms,
});

export const fetchPlatformsError = (error) => ({
  type: FETCH_PLATFORMS_ERROR,
  payload: error,
});
