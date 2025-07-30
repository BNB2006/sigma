import { useOthers, useSelf } from "@/liveblocks.config";
import { Avatar } from "./Avatar";
import styles from "./index.module.css";
import { generateRandomName } from "@/lib/utils";
import { useMemo } from "react";

const ActiveUsers = () => {
    const users = useOthers();
    const currentUser = useSelf();
    const hasMoreUsers = users.length > 3;

    const memoizedUsers = useMemo(() => {
        return (
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                    <span className="text-xs text-primary-textSecondary font-medium">Collaborators</span>
                    <div className="flex -space-x-2">
                        {currentUser && (
                            <Avatar name="You" otherStyles="border-2 border-primary-accent ring-2 ring-primary-surface" />
                        )}
                        {users.slice(0, 3).map(({ connectionId, info }) => {
                            return (
                                <Avatar key={connectionId} name={generateRandomName()} otherStyles="border-2 border-primary-border ring-2 ring-primary-surface" />
                            );
                        })}
                    </div>
                    {hasMoreUsers && (
                        <div className="flex items-center justify-center w-8 h-8 bg-primary-surfaceHover border border-primary-border rounded-full text-xs text-primary-textSecondary font-medium">
                            +{users.length - 3}
                        </div>
                    )}
                </div>
            </div>
        )
    }, [users.length])

    return memoizedUsers;
}

export default ActiveUsers;