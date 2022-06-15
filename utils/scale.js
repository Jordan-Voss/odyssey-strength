import { PixelRatio, Dimensions, Platform } from "react-native";

// Determine if the device pixel density and size are tablet-like.
// For better accuracy, you can also use the react-native-device-info library.
function isTabletLike() {
  const pixelDensity = PixelRatio.get();
  const windowDimensions = Dimensions.get("window");
  const adjustedWidth = windowDimensions.width * pixelDensity;
  const adjustedHeight = windowDimensions.height * pixelDensity;
  if (pixelDensity < 2 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) {
    return true;
  } else
    return (
      pixelDensity === 2 && (adjustedWidth >= 1920 || adjustedHeight >= 1920)
    );
}

// Given an input number, scale it to suit devices with different sizes and
// pixel densities.
export function scale(size) {
  // Fixed base width that has worked well for most of my use cases
  const baseWidth = isTabletLike() ? 520 : 350;
  const windowDimensions = Dimensions.get("window");
  const shorterWindowDimension =
    windowDimensions.width > windowDimensions.height
      ? windowDimensions.height
      : windowDimensions.width;
  return (shorterWindowDimension / baseWidth) * size;
}
// export default scale;
