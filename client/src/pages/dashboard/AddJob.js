import React from 'react'
import { FormRow, Alert, FormRowSelect } from '../../components'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage'

const AddJob = () => {
  const {showAlert, displayAlert, position, company,isLoading, createJob,
     jobLocation, jobType, jobTypeOptions, editJob,
     status, statusOptions, isEditing, handleChange, clearValues,
    } = useAppContext()

    const handleSubmit = (e) => {
      e.preventDefault()
  
      if (!position || !company || !jobLocation) {
        displayAlert()
        return
      }
      if(isEditing){
        editJob()
        return
      }
      createJob()
    }

    const handleJobInput = (e) => {
      const name = e.target.name
      const value = e.target.value
      handleChange({name, value})
    }
  return (
    <Wrapper>
      <form className='form'>
        <h3>{ isEditing ? 'edit job' : 'add job' } </h3>
        {showAlert && <Alert/>}
        <div className='form-center'>
          <FormRow type="text" name="position" value={position} handleChange={handleJobInput}/>
          <FormRow type="text" name="company" value={company} handleChange={handleJobInput}/>
          <FormRow type="text" labelText='job location' name="jobLocation" value={jobLocation} handleChange={handleJobInput}/>
        
        {/* job status */}
        <FormRowSelect
            name='status'
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
          />
          {/* job type */}
          <FormRowSelect
            name='jobType'
            labelText='job type'
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions}
          />
        {/* Buttons */}
        <div className='btn-container'>
            <button
              className='btn btn-block submit-btn'
              type='submit'
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
            <button
              className='btn btn-block clear-btn'
              onClick={(e)=>{
                e.preventDefault()
                clearValues()
              }}
            >
              clear
            </button>
        </div>
        </div>
      </form>
    </Wrapper>
  )
}

export default AddJob