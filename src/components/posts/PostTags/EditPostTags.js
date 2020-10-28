import React, {useState, useEffect, useContext} from "react"
import { PostTagContext } from "./PostTagProvider"

export const EditPostTags = (props) => {
    const { addPostTag, removePostTag } = useContext(PostTagContext)
    const [checked, setChecked] = useState(false);
    const tagId = props.tag.id
    const tagName = props.tag.tag
    const postTags = props.postTags
    const postTagIds = props.postTagIds
    const postId = props.postId
    const newPostTag = {
        "post_id": postId,
        "tag_id": tagId,
        "tag": {
            "id": tagId,
            "tag": tagName
        }
    }

    useEffect(() => {
        if (postTagIds.indexOf(tagId) > -1) {
            setChecked(true)
        }
    }, [postTagIds]); 

    const postTagDelete = () => {
        postTags.forEach((postTag) => {
            if (postTag.tag_id === tagId) {
                removePostTag(postTag.id)
            }
        })
    }

    const addOrRemoveTags = () => {
        if(checked) {
            postTagDelete()
        } else {
            addPostTag(newPostTag)
        }
    }

    const checkboxHandler = () => {
        addOrRemoveTags()
        setChecked(!checked)
    }


    return (
        <div className="modify-tags-container">
            <label>
                <input type="checkbox" id="first-tag" checked={checked} onChange={checkboxHandler}></input>
                {tagName}
            </label>
        </div>
    )
}