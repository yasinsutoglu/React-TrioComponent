import React from 'react'

const EditTodo = ({ editId, editDate, subj, setEditDate, setSubj,putTodo }) => {


const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(editId,subj,editDate);
    putTodo(editId,subj,editDate)
    setEditDate("");
    setSubj("")
}

  return (
    <>
      {/* Modal */}
      <div className="modal fade" id="edit-modal" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Tutorial
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>

            <form className="p-3" onSubmit={(e)=>handleSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Enter your title"
                  value={subj}
                  onChange={(e) => setSubj(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="desc" className="form-label">
                  Date
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="desc"
                  placeholder="Enter your Description"
                  value={editDate}
                  onChange={(e) => setEditDate(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Save Todo
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTodo