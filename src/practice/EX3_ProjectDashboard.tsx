import { useState, useEffect } from "react";

// 🚨 This component does too many things!
const ProjectDashboard = ({ projectId }: { projectId: string }) => {
  const [project, setProject] = useState<{
    name: string;
    description: string;
    deadline: string;
    team: { id: number; name: string; avatar: string }[];
    comments: { id: number; text: string }[];
  } | null>(null);

  const [team, setTeam] = useState<
    { id: number; name: string; avatar: string }[]
  >([]);

  const [comments, setComments] = useState<{ id: number; text: string }[]>([]);
  const [newComment, setNewComment] = useState("");
  const [status, setStatus] = useState("In Progress");

  // Fetch Project Details
  useEffect(() => {
    fetch(`/api/projects/${projectId}`)
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
        setTeam(data.team);
      })
      .catch(() => console.log("Error loading project"));
  }, [projectId]);

  // Fetch Comments
  useEffect(() => {
    fetch(`/api/projects/${projectId}/comments`)
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch(() => console.log("Error loading comments"));
  }, [projectId]);

  // Update Status
  const updateStatus = (newStatus: string) => {
    setStatus(newStatus);
    console.log(`Project status updated to: ${newStatus}`);
  };

  // Handle Adding New Comment
  const addComment = () => {
    if (newComment.trim() === "") return;
    setComments([...comments, { id: Date.now(), text: newComment }]);
    setNewComment("");
  };

  return (
    <div>
      {/* Project Info */}
      {project ? (
        <div>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <p>Deadline: {new Date(project.deadline).toDateString()}</p>
          <p>Status: {status}</p>
          <button onClick={() => updateStatus("Completed")}>
            Mark as Completed
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      {/* Team Members */}
      <h3>Team Members</h3>
      <ul>
        {team.map((member) => (
          <li key={member.id}>
            <img src={member.avatar} alt={member.name} width="30" />{" "}
            {member.name}
          </li>
        ))}
      </ul>

      {/* Comments Section */}
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add a comment..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button onClick={addComment}>Post</button>
    </div>
  );
};

export default ProjectDashboard;

//* Good Example

type Team = {
  id: number;
  name: string;
  avatar: string;
};

type Comment = {
  id: number;
  text: string;
};
