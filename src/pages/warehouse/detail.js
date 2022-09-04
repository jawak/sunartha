import { Breadcrumbs, Link, Typography } from '@mui/material';
import { Link as RouterLink, useParams } from 'react-router-dom';
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import WarehouseService from '../../services/warehouseService';

const columns = [
  {
    field: 'Active',
    headerName: 'Active',
    width: 90,
  },
  {
    field: 'Description',
    headerName: 'Description',
    width: 150,
  },
  {
    field: 'WarehouseID',
    headerName: 'WarehouseID',
    width: 150,
  },
  {
    field: 'Branch',
    headerName: 'Branch',
    width: 150,
  },
  {
    field: 'LastSync',
    headerName: 'Last Sync',
    width: 250,
  },
  {
    field: 'LastModifiedDateTime',
    headerName: 'last Update',
    width: 250,
  },
];

export default function Detail() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const getData = async () => {
    const resp = await WarehouseService.getDetail(id);
    setData([resp.data]);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          color="inherit"
          to="/"
          component={RouterLink}
        >
          Home
        </Link>
        <Link
          underline="hover"
          color="inherit"
          to="/warehouse"
          component={RouterLink}
        >
          Warehouse
        </Link>
        <Typography color="text.primary">
          Detail Location Warehouse -
          {' '}
          {data.length === 0 ? '' : data[0].WarehouseID}
        </Typography>
      </Breadcrumbs>

      <h1>
        Detail Location Warehouse -
        {' '}
        {data.length === 0 ? '' : data[0].WarehouseID}
      </h1>

      <Box sx={{ height: 200, width: '100%' }}>
        <DataGrid
          getRowId={(row) => row.WarehouseID}
          rows={data}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </Layout>
  );
}
