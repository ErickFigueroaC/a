import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import Button from '@mui/material/Button'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

export default function AffiliationsModal({
  open,
  setOpen,
  newData,
  setNewData,
  data,
  setData,
  isEdit
}) {
  const handleClose = () => {
    setOpen(false)
  }

  const handleSave = () => {
    if (isEdit) {
      setData(
        data.map((element) => {
          if (element.index === newData.index) {
            element.id = newData.id
            element.name = newData.name
            element.address = newData.address
            element.phoneNumber = newData.phoneNumber
            element.startDate = newData.startDate
            element.jobTitle = newData.jobTitle
            element.wage = newData.wage
            element.arl = newData.arl
            element.pensionFund = newData.pensionFund
          }
          return element
        })
      )
    } else {
      newData.index = data.length
      setData([...data, newData])
    }
    handleClose()
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box component="form" sx={style} noValidate autoComplete="off">
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Agregar nuevo dato
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div className="grid gap-4 grid-cols-3 grid-rows-3">
            <TextField
              id="outlined-basic"
              label="ID"
              variant="outlined"
              value={newData.id}
              onChange={(e) => setNewData({ ...newData, id: e.target.value })}
            />
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              value={newData.name}
              onChange={(e) => setNewData({ ...newData, name: e.target.value })}
            />
            <TextField
              id="outlined-basic"
              label="Address"
              variant="outlined"
              value={newData.address}
              onChange={(e) =>
                setNewData({ ...newData, address: e.target.value })
              }
            />
            <TextField
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              value={newData.phoneNumber}
              onChange={(e) =>
                setNewData({ ...newData, phoneNumber: e.target.value })
              }
            />
            <TextField
              id="outlined-basic"
              label="Start date"
              variant="outlined"
              value={newData.startDate}
              onChange={(e) =>
                setNewData({ ...newData, startDate: e.target.value })
              }
            />
            <TextField
              id="outlined-basic"
              label="Job title"
              variant="outlined"
              value={newData.jobTitle}
              onChange={(e) =>
                setNewData({ ...newData, jobTitle: e.target.value })
              }
            />
            <TextField
              id="outlined-basic"
              label="Wage"
              variant="outlined"
              value={newData.wage}
              onChange={(e) => setNewData({ ...newData, wage: e.target.value })}
            />
            <TextField
              id="outlined-basic"
              label="ARL"
              variant="outlined"
              value={newData.arl}
              onChange={(e) => setNewData({ ...newData, arl: e.target.value })}
            />
            <TextField
              id="outlined-basic"
              label="Pension fund"
              variant="outlined"
              value={newData.pensionFund}
              onChange={(e) =>
                setNewData({ ...newData, pensionFund: e.target.value })
              }
            />
          </div>
          <Button onClick={handleSave} variant="contained">
            {isEdit ? 'Guardar' : 'Agregar'}
          </Button>
        </Typography>
      </Box>
    </Modal>
  )
}
