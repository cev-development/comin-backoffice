/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { Loading } from "../components";

interface IProps extends RouteProps {
  isPrivate?: boolean;
  component: React.FC<any>;
}

const RouteWrapper: React.FC<IProps> = ({
  component: Component,
  isPrivate,
  ...rest
}) => {
  const isLogged = useSelector((state: any) => state.auth.isLogged);
  const [loading, setLoading] = useState(true);

  const result = sessionStorage.getItem("token");
  const token = sessionStorage.getItem("accessToken");
  useEffect(() => {
    const load = async () => {
      setLoading(true);
      if (result && token) {
        // api.defaults.headers.common.Authorization = `Bearer ${token}`;
        // dispatch(loadToken(JSON.parse(result)));s
      }
      setLoading(false);
    };
    load();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (result) {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  }

  if (!isLogged && isPrivate) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};

export default RouteWrapper;
