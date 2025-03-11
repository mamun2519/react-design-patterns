import { ComponentType, useEffect, useState } from "react";

export const withComponentDataFetch = (
  Component: ComponentType | any,
  url: string
) => {
