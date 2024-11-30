import React, { useState } from 'react';

const UserManagement = () => {
  const [selectedPermissions, setSelectedPermissions] = useState([]);

  const handlePermissionChange = (permission) => {
    setSelectedPermissions((prev) => (prev.includes(permission) ? prev.filter((p) => p !== permission) : [...prev, permission]));
  };

  const handleSave = () => {
    console.log('Data Saved');
    console.log({ selectedPermissions });
  };

  const handleCancel = () => {
    console.log('Cancelled');
  };

  return (
    <div className='user-management'>
      <h1>User Management</h1>
      <div className='container'>
        {/* Biodata Section */}
        <div className='biodata-section'>
          <h2>Biodata User Admin</h2>
          <div className='profile-picture'></div>
          <p>Nama Admin</p>
          <form className='biodata-form'>
            <label>
              Nama Lengkap
              <input type='text' placeholder='NAMA LENGKAP' />
            </label>
            <label>
              Email
              <input type='email' placeholder='EMAIL' />
            </label>
            <label>
              Password
              <input type='password' placeholder='PASSWORD' />
            </label>
          </form>
        </div>

        {/* Hak Akses Section */}
        <div className='permissions-section'>
          <h2>Pengaturan Hak Akses</h2>
          <div className='permissions-list'>
            <label>
              <input type='checkbox' value='Aplikasi Sistem Informasi Keuangan Sekolah' onChange={() => handlePermissionChange('Aplikasi Sistem Informasi Keuangan Sekolah')} />
              Aplikasi Sistem Informasi Keuangan Sekolah
            </label>
            <label>
              <input type='checkbox' value='Soal Ujian Sekolah' onChange={() => handlePermissionChange('Soal Ujian Sekolah')} />
              Soal Ujian Sekolah
            </label>
            <label>
              <input type='checkbox' value='LMS Sekolah' onChange={() => handlePermissionChange('LMS Sekolah')} />
              LMS Sekolah
            </label>
          </div>
        </div>
      </div>

      {/* Tanggal & Actions */}
      <div className='action-section'>
        <div className='date-inputs'>
          <label>
            Tanggal Aktif
            <input type='date' />
          </label>
          <label>
            Tanggal Akhir
            <input type='date' />
          </label>
        </div>
        <div className='buttons'>
          <button className='save-button' onClick={handleSave}>
            Simpan
          </button>
          <button className='cancel-button' onClick={handleCancel}>
            Batal
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
