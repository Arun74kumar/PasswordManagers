/**
 * App bootstrap gate
 * Get user details from server and decide
 * which section need to show
 * @format
 */

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { bootstrapApp } from '../slice';
import { selectIsAppReady } from '../selectors';

const AppBootstrapGate = ({ children }) => {
  const dispatch = useDispatch();
  const isAppReady = useSelector(selectIsAppReady);

  /**
   * Check user has already login or not
   * If Already Login handle amplifyConfig, orgId  initiate socket and handle Navigation screen Routes
   */
  useEffect(() => {
    dispatch(bootstrapApp());
  }, [dispatch]);

  if (isAppReady) {
    return children;
  }
};

export default AppBootstrapGate;
