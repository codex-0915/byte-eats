import React from 'react';
import { Redirect, Slot, Tabs } from 'expo-router';

export default function _Layout() {
  {
    /* TODO: Remove this after developing auth functionality. 
            Setting variable to false temporary so I can route to the tab screens */
  }
  const isAuthenticated = true;

  if (!isAuthenticated) return <Redirect href="/sign-in" />;

  return <Slot />;
}
