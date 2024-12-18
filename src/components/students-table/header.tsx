import { useContext, useEffect, useState } from 'react'
import { InputSearch } from '../inputs/search'
import { MagnifyingGlass } from 'phosphor-react'
import { UseCheckEnrollment } from '../../hooks/useCheckEnrollment'
import { ApplicationContexts } from '../contexts/applicationContexts'
import { ProgressBar } from '../progress-bar'
import { Toast } from '../toast'
import { ButtonForSearchOptions } from '../button-for-search-options'

interface IDataTableHeader {
  totalStudents: number
  students: any
}

const DataTableHeader = ({ totalStudents }: IDataTableHeader) => {
  const { setStudentFound, studentFound }: any = useContext(ApplicationContexts)
  const {
    error,
    isLoading,
    mutate: useCheckEnrollment,
    data: student,
    reset: resetUserFound
  }: any = UseCheckEnrollment()

  const [enrollmentNumber, setEnrollmentNumber] = useState<any>()
  const [searchType, setSearchType] = useState<string>('enrollmentNumber')

  const searchStudent = () => {
    const params = new URLSearchParams({
      [searchType === 'enrollmentNumber' ? 'enrollmentNumber' : 'identityCardNumber']: enrollmentNumber || '',
    })
    useCheckEnrollment(params)
  }

  const fetchUser = (e: any) => e.key === 'Enter' && searchStudent()

  useEffect(() => {
    const wasTheEnrollmentApproved =
      student?.enrollment?.paymentState === 'APPROVED' && student?.enrollment?.docsState === 'APPROVED'

    if (student) {
      if (wasTheEnrollmentApproved && student.enrollment.students?.User) {
        setStudentFound(student)
      } else {
        Toast({ message: 'Estudante não encontrado', theme: 'colored', toastType: 'error' })
        setStudentFound(null)
      }
    } else {
      setStudentFound(null)
    }

  }, [student, setStudentFound, resetUserFound])

  useEffect(() => {
    if (error) {
      Toast({
        message: 'Estudante não encontrado',
        theme: 'colored',
        toastType: 'error'
      })
      setStudentFound(null)
    }

    if (!studentFound) resetUserFound()
  }, [error, setStudentFound, studentFound])

  return (
    <header className="flex items-start gap-8 flex-wrap lg:flex-row justify-between">
      {isLoading && <ProgressBar />}

      <div id="about__contacts" className="flex flex-col gap-3">
        <h1 className="text-[24px] lg:text-[32px] font-semibold leading-9">
          Alunos Carregados ( {totalStudents} )
        </h1>
        <p className="text-base font-normal leading-5 text-[#737373]">
          Encontre os alunos!
        </p>
      </div>

      <div id="search__area"
        className="flex flex-col items-center relative gap-3 w-full lg:max-w-[316px]"
      >
        <div className="flex gap-4 flex-wrap w-full justify-between">
          <ButtonForSearchOptions
            content='Nº de inscrição'
            option={searchType === 'enrollmentNumber'}
            onClick={() => setSearchType('enrollmentNumber')}
          />
          <ButtonForSearchOptions
            content='Nº do BI'
            option={searchType !== 'enrollmentNumber'}
            onClick={() => setSearchType('identityCardNumber')}
          />
        </div>
        <InputSearch
          placeholder={'Pesquisar estudante...'}
          className="flex-row-reverse"
          icon={
            <MagnifyingGlass
              id="search-icon"
              className="cursor-pointer p-1 hover:bg-slate-200 rounded-full flex items-center justify-center"
              color="#000000"
              size={24}
              onClick={searchStudent}
            />
          }
          value={enrollmentNumber}
          onKeyDown={(e: any) => fetchUser(e)}
          onChange={(e: any) => setEnrollmentNumber(e.currentTarget.value)}
        />
        {student && (
          <button
            type="button"
            onClick={() => { resetUserFound(), setEnrollmentNumber('') }}
            className="absolute top-24 text-[14px] text-[#898989] py-2 px-4 rounded-3xl hover:bg-[#d1d1d140]"
          >
            Exibir todos...
          </button>
        )}
      </div>
    </header>
  )
}

export { DataTableHeader }
