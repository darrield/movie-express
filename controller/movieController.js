import MovieModel from "../models/movieModel.js"

export const listMovie = async (req, res) => {
        try {

        const data = await MovieModel.find({
        })

        res.status(201).json({
            message : "list Movie",
            data : data
        })
    } catch (error) {
        res.status(500).json({
            message : error.message,
            data : null
        })
    }
    
}
export const createMovie = async (req, res) => {
    try {
        const request = req.body

        const response = await MovieModel.create({
            judul : request.judul,
            tahunRilis : request.tahunRilis,
            sutradara : request.sutradara
           
        })

        res.status(201).json({
            message : "Movie berhasil di buat",
            data : response
        })
    } catch (error) {
        res.status(500).json({
            message : error.message,
            data : null
        })
    }

}
export const updateMovie = async (req, res) => {
        try {
        const id = req.params?.id
        const request = req.body

        if(!id) {
            return res.status(500).json({
                message : "Id wajib di isi",
                data : null
            })
        }

        const response = await MovieModel.findByIdAndUpdate(id, {
            judul : request.judul,
            tahunRilis : request.tahunRilis,
            sutradara : request.sutradara
        })

        if (!response) {
            return res.status(500).json({
                message : "Movie gagal diupdate",
                data : null
            })
        }

        return res.status(200).json({
            message : "Movie berhasil di update",
            data : null
        })

 
    } catch (error) {
        res.status(500).json({
            message : error.message,
            data : null
        })
    }
}
export const deleteMovie = async (req, res) => {
    try {
        const id = req.params.id
        if(!id) {
            return res.status(500).json({
                message : "Id wajib di isi",
                data : null
            })
        }

    const response = await MovieModel.findByIdAndDelete(id)

    if(response) {
        return res.status(200).json({
            message: "Message berhasil dihapus",
            data : null
        })
    }
    return res.status(404).json({
        message : "Message tidak ditemukan",
        data : null
    })

    } catch (error) {
        res.status(500).json({
            message : error,
            data : null
        })
    }

}