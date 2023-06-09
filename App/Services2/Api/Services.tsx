import {baseUrl} from '../../Config/baseURL';
import {flashErrorMessage, flashSuccessMessage} from '../FlashMessages';
import EndPoints from './EndPoints';
import {Api} from './Middleware';

class GApiServices {
  login = (email: any, password: any) => {
    return new Promise((resolve, reject) => {
      Api.get(`${EndPoints.login}?email=${email}&password=${password}`)
        .then(res => {
          resolve(res?.data);
        })
        .catch((error: any) => {
          flashErrorMessage();
          console.log('error while login user =>', error);
          reject('');
        });
    });
  };

  getAllJobs = () => {
    return new Promise((resolve, reject) => {
      Api.get(`${EndPoints.getAllJobs}`)
        .then(res => {
          resolve(res?.data);
        })
        .catch((error: any) => {
          console.log('error while getting all jobs =>', error);
          reject('');
        });
    });
  };
  getBestMatch = (uid: any) => {
    return new Promise((resolve, reject) => {
      Api.get(`${EndPoints.bestmatch}?uid=${uid}`)
        .then(res => {
          resolve(res?.data);
        })
        .catch((error: any) => {
          console.log('error while getting all jobs =>', error);
          reject('');
        });
    });
  };

  getAllEducation = (uid: any) => {
    return new Promise((resolve, reject) => {
      Api.get(`${EndPoints.getAllEducation}?uid=${uid}`)
        .then(res => {
          resolve(res?.data);
        })
        .catch((error: any) => {
          console.log('error while getting all educations =>', error);
          reject('');
        });
    });
  };

  getAllExperiences = (uid: any) => {
    return new Promise((resolve, reject) => {
      Api.get(`${EndPoints.getAllExperiences}?uid=${uid}`)
        .then(res => {
          resolve(res?.data);
        })
        .catch((error: any) => {
          console.log('error while getting all experiences =>', error);
          reject('');
        });
    });
  };

  addExperience = (params: any) => {
    return new Promise((resolve, reject) => {
      Api.post(EndPoints.addExperience, params)
        .then(async res => {
          flashSuccessMessage('Experience added');
          resolve(res?.data?.results);
        })
        .catch(error => {
          flashErrorMessage();
          reject('');
          console.log('error while adding experience =>', error);
        });
    });
  };

  deleteExperience = (id: any) => {
    return new Promise((resolve, reject) => {
      Api.delete(`${EndPoints.deleteExperience}?ExpID=${id}`)
        .then(() => {
          resolve('');
          flashSuccessMessage('Deleted');
        })
        .catch(error => {
          console.log('error while deleting experience =>', error);
          flashErrorMessage();
          reject('');
        });
    });
  };

  addEducation = (params: any) => {
    return new Promise((resolve, reject) => {
      Api.post(EndPoints.addEducation, params)
        .then(async res => {
          flashSuccessMessage('Education added');
          resolve(res?.data?.results);
        })
        .catch(error => {
          flashErrorMessage();
          reject('');
          console.log('error while adding education =>', error);
        });
    });
  };

  deleteEducation = (id: any) => {
    return new Promise((resolve, reject) => {
      Api.delete(`${EndPoints.deleteEducation}?EduID=${id}`)
        .then(() => {
          resolve('');
          flashSuccessMessage('Deleted');
        })
        .catch(error => {
          console.log('error while deleting education =>', error);
          flashErrorMessage();
          reject('');
        });
    });
  };

  updateUser = (data: any) => {
    return new Promise((resolve, reject) => {
      var requestOptions = {
        method: 'PUT',
        body: data,
        redirect: 'follow',
      };

      fetch(`${baseUrl}${EndPoints.updateUser}`, requestOptions)
        .then(response => response.text())
        .then(result => {
          console.log(result);
          flashSuccessMessage('Image updated');
          resolve('');
        })
        .catch(error => {
          console.log('error while updating user =>', error);
          reject('');
        });
    });
  };

  getJobDetail = (jid: any) => {
    return new Promise((resolve, reject) => {
      Api.get(`${EndPoints.getJobDetail}?jid=${jid}`)
        .then(res => {
          resolve(res?.data);
        })
        .catch((error: any) => {
          console.log('error while getting job detail =>', error);
          reject('');
        });
    });
  };

  applyJob = (params: any) => {
    return new Promise((resolve, reject) => {
      const {Jid, Uid, name, documentPath} = params;
      var formdata = new FormData();
      formdata.append('Jid', Jid);
      formdata.append('Uid', Uid);
      formdata.append('name', name);
      formdata.append('DocumentPath', documentPath);

      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
      };

      fetch(
        `${baseUrl}/JobApplication/JobFileApplicationWithFilterPost2`,
        requestOptions,
      )
        .then(response => response.text())
        .then(result => {
          if (typeof result === 'string') {
            flashSuccessMessage(result);
          }
          resolve('');
        })
        .catch(error => {
          console.log('error while applying to job =>', error);
          reject('');
        });
    });
  };

  getJobApplication = () => {
    return new Promise((resolve, reject) => {
      Api.get(`${EndPoints.getJobApplication}`)
        .then(res => {
          resolve(res?.data);
        })
        .catch((error: any) => {
          console.log('error while getting job application =>', error);
          reject('');
        });
    });
  };
}

const ApiServices = new GApiServices();
export default ApiServices;
