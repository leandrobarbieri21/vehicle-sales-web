import { Routes as RoutesWrapper, Route } from 'react-router-dom';

import { VehicleSales } from './components/pages/VehicleSalesPage/vehicleSales.page';

export function Routes() {
  return (
    <RoutesWrapper>
      <Route path="/" element={<VehicleSales />} />
    </RoutesWrapper>
  );
}
