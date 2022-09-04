import { Breadcrumbs, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import WarehouseService from '../../services/warehouseService';

const columns = [
  {
    field: 'WarehouseID',
    headerName: 'ID',
    width: 90,
    renderCell: (params) => (
      <Link component={RouterLink} to={`/warehouse/${params.value}`}>{params.value}</Link>
    ),
  },
  {
    field: 'Branch',
    headerName: 'Branch',
    width: 150,
  },
  {
    field: 'Description',
    headerName: 'Description',
    width: 150,
  },
];

export default function List() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const resp = await WarehouseService.getList();
    setData(resp.data);
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
        <Typography color="text.primary">Warehouse</Typography>
      </Breadcrumbs>

      <h1>Warehouse</h1>

      <Box sx={{ height: 650, width: '100%' }}>
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
