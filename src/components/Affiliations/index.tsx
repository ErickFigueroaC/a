import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import AffiliationsModal from './AffiliationsModal'

interface IData {
  index?: number
  id: string
  name: string
  address: string
  phoneNumber: string
  startDate: string
  jobTitle: string
  wage: string
  arl: string
  pensionFund: string
}

const INIT_DATA: IData[] = [
  {
    index: 0,
    id: '1000000734',
    name: 'Alex Quizo',
    address: 'Calle Sociedad',
    phoneNumber: '3131313134',
    startDate: '28/28/2112',
    jobTitle: 'Payaso',
    wage: '0',
    arl: 'No',
    pensionFund: 'No'
  }
]

const INIT_NEW_DATA: IData = {
  index: 0,
  id: '',
  name: '',
  address: '',
  phoneNumber: '',
  startDate: '',
  jobTitle: '',
  wage: '',
  arl: '',
  pensionFund: ''
}

function Affiliations() {
  const [data, setData] = useState(INIT_DATA)
  const [open, setOpen] = useState(false)
  const [newData, setNewData] = useState(INIT_NEW_DATA)
  const [isEdit, setIsEdit] = useState(false)
  const handleOpen = () => {
    setNewData(INIT_NEW_DATA)
    setIsEdit(false)
    setOpen(true)
  }

  const handleDelete = (id: string) => {
    const newData = data.filter((element) => element.id !== id)
    setData(newData)
  }

  const handleEdit = (data: IData, index: number) => {
    setNewData({ ...data, index })
    setIsEdit(true)
    setOpen(true)
  }

  return (
    <>
      <Button onClick={handleOpen} variant="contained">
        Agregar dato
      </Button>
      <AffiliationsModal
        open={open}
        setOpen={setOpen}
        newData={newData}
        setNewData={setNewData}
        data={data}
        setData={setData}
        isEdit={isEdit}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">Phone number</TableCell>
              <TableCell align="right">Start date</TableCell>
              <TableCell align="right">Job title</TableCell>
              <TableCell align="right">Wage</TableCell>
              <TableCell align="right">Arl</TableCell>
              <TableCell align="right">Pension fund</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((element, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {element.id}
                </TableCell>
                <TableCell align="right">{element.name}</TableCell>
                <TableCell align="right">{element.address}</TableCell>
                <TableCell align="right">{element.phoneNumber}</TableCell>
                <TableCell align="right">{element.startDate}</TableCell>
                <TableCell align="right">{element.jobTitle}</TableCell>
                <TableCell align="right">{element.wage}</TableCell>
                <TableCell align="right">{element.arl}</TableCell>
                <TableCell align="right">{element.pensionFund}</TableCell>
                <TableCell align="right">
                  <IconButton
                    aria-label="edit"
                    onClick={() => handleEdit(element, index)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    onClick={() => handleDelete(element.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default Affiliations
